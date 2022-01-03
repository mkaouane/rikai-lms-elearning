import axios from 'axios'
import InstructorRoute from '../../../components/routes/InstructorRoute';



export default function InstructorIndex() {
    const context = useContext(Context);
    return (
        <InstructorRoute>
            <h1>Instructor Dashboard</h1>
        </InstructorRoute>
    )
}
