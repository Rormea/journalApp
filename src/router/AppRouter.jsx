import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"



export const AppRouter = () => {
    return (
        <Routes>
            {/* login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* aca ya la persona esta logeada */}
            <Route path="/*" element={<JournalRoutes />} />

        </Routes >
    )
}
