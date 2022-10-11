import React from "react"
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                <Head title="Dashboard" />
                <h1>estou na Dashboard</h1>
            </div>
        </div>

    )
}
