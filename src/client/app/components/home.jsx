import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

class Home extends React.Component {

    render () {
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    Добро пожаловать в калькулятор расчета ущерба от пожара!!
                </Typography>
            </div>
        );
    }

}

export default (Home);