// import "typeface-roboto";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 120
    },
    button: {
        margin: theme.spacing.unit
    }
});

class City extends React.Component {

    state={
        K: 0,
        U: 0,
        R: 0,
        Result: null
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    calc =() => {
        let {K, U, R, Result} = this.state;
        K = Math.round(K * 10) / 10;
        Result = 10 * K * U * ((0.1276 * R) + ((1 / 0.04) * 0.0017 * R) + ((1 / 0.5) * 0.0058 * R) + ((1 / 0.01) * 0.0029 * R) +
            ((1 / 0.06) * 0.0017 * R) + ((1 / 0.003) * 0.0006 * R) + ((1 / 0.000001) * 0.000000522 * R) + ((1 / 0.05) * 0.05577 * R));
        Result = Math.round(Result * 100) / 100;
        this.setState({
            Result: Result
        });
    };

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Выберите экономический район Российской Федерации:
                </Typography>
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.K}
                        onChange={this.handleChange("K")}
                    >
                        <MenuItem value={1.41}>Северный</MenuItem>  //нужно  расчетах округлять
                        <MenuItem value={1.51}>Северо-Западный</MenuItem>
                        <MenuItem value={1.91}>Центральный</MenuItem>
                        <MenuItem value={1.1}>Волго-Вятский</MenuItem>
                        <MenuItem value={1.5}>Центрально-Черноземный</MenuItem>
                        <MenuItem value={1.9}>Поволжский</MenuItem>
                        <MenuItem value={1.6}>Северо-Кавказский</MenuItem>
                        <MenuItem value={2.0}>Уральский</MenuItem>
                        <MenuItem value={1.2}>Западно-Сибирский</MenuItem>
                        <MenuItem value={1.4}>Восточно-Сибирский</MenuItem>
                        <MenuItem value={1.0}>Дальневосточный</MenuItem>
                    </Select>
                </FormControl>
            </form>
                <Typography variant="subtitle1" gutterBottom>
                    Укажите удельный экономический ущерб в руб/усл.т
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.U}
                    onChange={this.handleChange("U")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Укажите массу сгоревших материалов пожарной нагрузки в т
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.R}
                    onChange={this.handleChange("R")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Результат:
                    {this.state.Result}
                      рублей
                </Typography>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={this.calc}
                >
                    Расчет
                </Button>
            </div>
        );
    }
}

City.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(City);