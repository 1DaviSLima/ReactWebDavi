function Footer() {
    const style = {
        color: "white",
        backgroundColor: "rgb(25, 54, 79)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "300px",
        justifyContent: "center",
    }
    return (
        <footer style={style}>
            <div className="container">
                <div className="row mt-2 ms-2">
                    <div className="col-3">
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                    </div>
                    <div className="col-3">
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                    </div>
                     <div className="col-3">
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                    </div>
                    <div className="col-3">
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                        <h5>olá footer</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer