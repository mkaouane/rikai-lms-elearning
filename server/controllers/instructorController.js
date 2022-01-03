import User from '../models/user'
import stripe from 'stripe'
import queryString from 'query-string'
export const makeInstructor = async (req, res) => {
    try {
        // find user from db
    const user = await User.findById(req.user._id).exec();

    // if user dont have stripe_account_id yet, create new
    if (!user.stripe.account_id) {
        const account = await stripe.accounts.create({type: 'express'})
        console.log('account => ', account.id)

        user.stripe_account_id = account.id;
        user.save();
    }
    // create account link based on account id (for frontend to complete onboarding)
    const accountLink = await stripe.accountLinks.create({
        account: user.stripe_account_id,
        refresh_url: process.env.STRIPE_REDIRECT_URL,
        return_url: process.env.STRIPE_REDIRECT_URL,
        type: 'account_onboarding'
    })
    // pre-fill any info such as email, then send ulr response to frontend
    accountLink = Object.assign(accountLink, {
        "stripe_user[email]": user.email,
    })
    //then sens the account link as response to frontend

    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`)
    } catch (error) {
        console.log('MAKE INSTRUCTOR ERROR', error)
    }
}