/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Button from "@material-ui/core/Button/Button";

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

let nizB = [
    [10, 20, 25, 17, 7, 100],
    [5, 15, 20, 12, 100, 100],
    [100, 10, 15, 7, 100, 100],
    [100, 5, 10, 5, 100, 100],
    [15, 30, 35, 25, 12, 5],
    [10, 25, 30, 20, 7, 100],
    [5, 20, 25, 15, 100, 100],
    [100, 15, 20, 10, 100, 100],
    [20, 50, 55, 40, 18, 10],
    [15, 35, 40, 30, 12, 5],
    [10, 30, 35, 25, 7, 100],
    [100, 25, 30, 20, 100, 100]
];

let nizU = [
    [30, 80, 85, 55, 25, 15],
    [25, 70, 75, 45, 20, 10],
    [20, 50, 60, 35, 15, 5],
    [15, 35, 50, 30, 5, 100],
    [40, 90, 95, 65, 35, 20],
    [35, 60, 85, 55, 30, 15],
    [30, 70, 75, 45, 25, 10],
    [20, 60, 70, 40, 15, 5],
    [65, 100, 100, 90, 60, 40],
    [50, 95, 100, 80, 45, 35],
    [40, 80, 85, 70, 35, 25],
    [25, 75, 80, 60, 20, 15]
];

let verh = [
    [85, 90, 95, 55, 25, 15],
    [70, 85, 90, 45, 20, 10],
    [60, 80, 85, 35, 15, 5],
    [50, 75, 80, 30, 5, 100],
    [95, 100, 100, 65, 35, 20],
    [90, 95, 95, 55, 30, 15],
    [85, 85, 90, 45, 25, 10],
    [75, 80, 85, 40, 15, 5],
    [100, 100, 100, 90, 60, 40],
    [100, 100, 100, 80, 45, 35],
    [95, 95, 100, 70, 35, 25],
    [90, 90, 95, 60, 20, 15]
];

let Csosna = [
    [169.74, 121.14, 60.48, 4.68],
    [153.9, 109.98, 55.08, 4.68],
    [130.68, 93.42, 47.16, 3.24],
    [100.44, 71.64, 36.72, 3.24],
    [77.22, 55.08, 27.72, 2.34],
    [61.38, 43.92, 22.14, 2.34],
    [46.26, 32.76, 16.56, 1.08]
];

let CElPih = [
    [152.82, 108.9, 55.08, 4.68],
    [138.6, 99, 49.5, 4.68],
    [117.9, 84.6, 41.94, 3.24],
    [90.18, 64.98, 32.04, 2.34],
    [69.3, 49.5, 25.38, 2.34],
    [55.08, 39.6, 19.8, 1.08],
    [41.94, 29.7, 15.12, 1.08]
];

let CDub = [
    [381.24, 272.34, 137.34, 11.88],
    [346.68, 247.68, 124.38, 9.9],
    [295.2, 211.68, 105.66, 8.64],
    [225.72, 161.46, 81.18, 7.02],
    [173.34, 124.38, 63, 5.04],
    [138.6, 99, 49.14, 3.6],
    [104.04, 74.34, 38.34, 3.6]
];

let CBereza = [
    [84.6, 60.48, 30.96, 5.04],
    [77.22, 55.08, 27.72, 5.04],
    [66.06, 47.16, 23.04, 3.6],
    [50.76, 36.72, 17.46, 3.6 ],
    [38.34, 27.72, 14.22, 2.7],
    [30.96, 22.14, 11.16, 2.34],
    [23.04, 16.56, 9, 1.08]
];

let COsina = [
    [16.56, 11.88, 6.66, 0.36],
    [15.12, 11.16, 5.58, 0.36],
    [13.5, 9.54, 4.68, 0.36],
    [9.54, 7.92, 3.24, 0.36],
    [7.92, 5.58, 3.24, 0.36],
    [6.66, 4.68, 2.34, 0.36],
    [4.68, 3.24, 2.34, 0.18]
];

let KSosna = [
    [12, 0.49, 0.45, 0.38, 0.29, 0.22, 0.18, 0.13],
    [14, 0.59, 0.54, 0.46, 0.35, 0.27, 0.22, 0.16],
    [16, 0.69, 0.63, 0.53, 0.41, 0.31, 0.25, 0.19],
    [18, 0.75, 0.68, 0.58, 0.44, 0.34, 0.27, 0.20],
    [20, 0.82, 0.75, 0.64, 0.49, 0.37, 0.30, 0.22 ],
    [22, 0.88, 0.80, 0.68, 0.52, 0.40, 0.32, 0.24 ],
    [24, 0.94, 0.85, 0.72, 0.55, 0.43, 0.34, 0.26 ],
    [28, 1.05, 0.95, 0.84, 0.62, 0.48, 0.38, 0.29 ],
    [32, 1.13, 1.03, 0.87, 0.67, 0.51, 0.41, 0.31 ],
    [36, 1.16, 1.05, 0.90, 0.68, 0.53, 0.42, 0.32 ],
    [40, 1.20, 1.09, 0.92, 0.71, 0.54, 0.44, 0.31]
];

let KEl = [
    [12, 0.42, 0.38, 0.32, 0.24, 0.19, 0.15, 0.12],
    [14, 0.53, 0.48, 0.41, 0.31, 0.24, 0.19, 0.15 ],
    [16, 0.61, 0.55, 0.47, 0.36, 0.28, 0.22, 0.17 ],
    [18, 0.66, 0.60, 0.51, 0.39, 0.30, 0.24, 0.18 ],
    [20, 0.74, 0.67, 0.57, 0.44, 0.34, 0.27, 0.20],
    [22, 0.80, 0.72, 0.62, 0.47, 0.36, 0.29, 0.22 ],
    [24, 0.84, 0.77, 0.65, 0.50, 0.38, 0.31, 0.23 ],
    [28, 0.94, 0.85, 0.72, 0.55, 0.43, 0.34, 0.26 ],
    [32, 1.02, 0.93, 0.79, 0.60, 0.46, 0.37, 0.28 ],
    [36, 1.08, 0.98, 0.84, 0.64, 0.49, 0.39, 0.30 ],
    [40, 1.08, 0.98, 0.83, 0.64, 0.49, 0.39, 0.30]
];

let KPihta = [
    [ 12, 0.40, 0.36, 0.31, 0.23, 0.19, 0.14, 0.11 ],
    [ 14, 0.52, 0.47, 0.40, 0.30, 0.24, 0.19, 0.14 ],
    [ 16, 0.60, 0.54, 0.46, 0.35, 0.27, 0.22, 0.17 ],
    [ 18, 0.66, 0.60, 0.51, 0.39, 0.30, 0.24, 0.18 ],
    [ 20, 0.73, 0.67, 0.57, 0.43, 0.33, 0.27, 0.20 ],
    [ 22, 0.79, 0.71, 0.61, 0.47, 0.36, 0.28, 0.22 ],
    [ 24, 0.83, 0.76, 0.64, 0.49, 0.38, 0.30, 0.23 ],
    [ 26, 0.88, 0.80, 0.68, 0.52, 0.40, 0.32, 0.24 ],
    [ 28, 0.90, 0.82, 0.70, 0.54, 0.41, 0.33, 0.25],
    [ 30, 0.93, 0.85, 0.72, 0.55, 0.42, 0.34, 0.25 ],
    [ 32, 0.97, 0.98, 0.75, 0.58, 0.44, 0.35, 0.27 ],
    [ 34, 0.98, 0.89, 0.75, 0.58, 0.44, 0.35, 0.27 ],
    [ 36, 0.99, 0.90, 0.76, 0.58, 0.45, 0.36, 0.27]
];

let KBereza = [
    [12, 0.17, 0.16, 0.13, 0.10, 0.08, 0.06, 0.05 ],
    [14, 0.22, 0.20, 0.17, 0.13, 0.10, 0.08, 0.06 ],
    [16, 0.26, 0.23, 0.20, 0.15, 0.12, 0.09, 0.07 ],
    [18, 0.28, 0.26, 0.22, 0.17, 0.13, 0.10, 0.08 ],
    [20, 0.31, 0.29, 0.25, 0.19, 0.14, 0.11, 0.09 ],
    [22, 0.34, 0.31, 0.27, 0.20, 0.16, 0.12, 0.09],
    [24, 0.37, 0.33, 0.29, 0.22, 0.17, 0.13, 0.10 ],
    [28, 0.41, 0.37, 0.32, 0.24, 0.19, 0.15, 0.11],
    [32, 0.43, 0.39, 0.34, 0.26, 0.20, 0.16, 0.12]
];

let KOsina = [
    [12, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01 ],
    [14, 0.03, 0.03, 0.02, 0.02, 0.02, 0.01, 0.01],
    [16, 0.04, 0.03, 0.03, 0.02, 0.02, 0.01, 0.01 ],
    [18, 0.04, 0.04, 0.03, 0.02, 0.02, 0.02, 0.01],
    [20, 0.04, 0.04, 0.04, 0.03, 0.02, 0.04, 0.01],
    [22, 0.05, 0.04, 0.04, 0.03, 0.02, 0.05, 0.01],
    [24, 0.05, 0.05, 0.04, 0.03, 0.02, 0.07, 0.01 ],
    [28, 0.05, 0.05, 0.04, 0.03, 0.03, 0.11, 0.01],
    [32, 0.06, 0.05, 0.04, 0.03, 0.03, 0.14, 0.01],
    [36, 0.05, 0.05, 0.04, 0.03, 0.02, 0.15, 0.01],
    [40, 0.05, 0.05, 0.04, 0.03, 0.02, 0.17, 0.01]
];

let KDub = [
    [12, 0.76, 0.69, 0.59, 0.45, 0.35, 0.27, 0.21],
    [14, 0.90, 0.82, 0.70, 0.54, 0.41, 0.33, 0.25],
    [16, 0.96, 0.87, 0.75, 0.57, 0.44, 0.35, 0.26],
    [18, 1.06, 0.96, 0.82, 0.63, 0.48, 0.39, 0.29],
    [20, 1.18, 1.07, 0.91, 0.70, 0.54, 0.43, 0.32],
    [22, 1.27, 1.15, 0.98, 0.75, 0.58, 0.46, 0.35],
    [24, 1.34, 1.22, 1.04, 0.80, 0.61, 0.49, 0.37 ],
    [28, 1.48, 1.35, 1.15, 0.88, 0.67, 0.54, 0.40],
    [32, 1.59, 1.45, 1.23, 0.95, 0.72, 0.58, 0.43],
    [36, 1.71, 1.55, 1.32, 1.01, 0.78, 0.62, 0.47],
    [40, 1.74, 1.58, 1.35, 1.03, 0.79, 0.63, 0.47],
    [44, 1.74, 1.58, 1.34, 1.03, 0.79, 0.63, 0.47],
    [48, 1.75, 1.59, 1.35, 1.04, 0.79, 0.63, 0.48],
    [52, 1.73, 1.57, 1.34, 1.03, 0.79, 0.63, 0.47]
];

let MKpm = [
    [0.91, 0.91, 0.91],
    [1.00, 1.00, 1.00],
    [1.61, 1.61, 1.61],
    [1.41, 1.41, 1],
    [1.72, 1.72, 1],
    [1, 2.32, 1],
    [1, 3.45, 1]
];

class Forest extends React.Component {
    state = {
        V: 0,       // объем корневого запаса древесины
        tree: "",   // выбор дерева
        diametr: 0, // диаметр
        dist: 0,    // расстояние вывозки
        pozhar: "", // вид пожара
        intens: "", // интенсивность пожара
        wood: "",    // вид древесины
        N: 0,       // норматив затрат на выращивание
        Vpm: 0,     // процент потерь молодняка
        S: 0,       // площадь поврежденного участка
        ageM: 0,    // возраст молодниов
        treeM: 0,   // выбор молодняка
        Kez: 0,     // коэффициент значимости лесов
        K: 0,       // коэффициент экологической ситуации
        m: 0,       // масса сгоревшей биомассы леса
        res: 0
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    calc =() => {
        let lengthMass;
        let Vp, Kp, C;
        let colVp, rowVp;
        let KMass, CMass, VpMass;
        let colKp, rowKp;
        let colC, rowC;
        switch (this.state.tree) {
            case "sosna": {
                colVp = 0;
                KMass = KSosna;
                CMass = Csosna;
                lengthMass = 11;
                break;
            }
            case "el": {
                colVp = 1;
                KMass = KEl;
                CMass = CElPih;
                lengthMass = 11;
                break;
            }
            case "pihta": {
                colVp = 2;
                KMass = KPihta;
                CMass = CElPih;
                lengthMass = 13;
                break;
            }
            case "bereza": {
                colVp = 3;
                KMass = KBereza;
                CMass = CBereza;
                lengthMass = 9;
                break;
            }
            case "osina": {
                colVp = 4;
                KMass = KOsina;
                CMass = COsina;
                lengthMass = 11;
                break;
            }
            case "dub": {
                colVp = 5;
                KMass = KDub;
                CMass = CDub;
                lengthMass = 14;
                break;
            }
        };
        switch (this.state.pozhar) {
            case "nizB": {
                VpMass = nizB;
                break;
            }
            case "nizU": {
                VpMass = nizU;
                break;
            }
            case "verh": {
                VpMass = verh;
                break;
            }
        }

        rowVp = this.state.intens;
        let diametr = this.state.diametr;
        if ((diametr >= 12) && (diametr <= 16)) {
            rowVp = rowVp + 0;
        } else if ((diametr >= 17) && (diametr <= 24)) {
            rowVp = rowVp + 1;
        } else if (!((diametr >= 25) && (diametr <= 32))) {
            rowVp = rowVp + 2;
        } else {
            rowVp = rowVp + 3;
        }
        Vp = (VpMass[rowVp][colVp]) / 100; // первая цифра строка, вторая столбец

        colKp = this.state.dist;
        for (let i = 0; i < lengthMass; i++) {
            if ((KMass[i][0]) >= diametr) {
                rowKp = i;
                break;
            }
        }
        Kp = KMass[rowKp][colKp];

        rowC = this.state.dist - 1;
        colC = this.state.wood;
        C = CMass[rowC][colC];

        let U1 = this.state.V * Vp * Kp * C;

        let Kpm, rowKpm, colKpm;
        rowKpm = this.state.ageM;
        colKpm = this.state.treeM;
        Kpm = MKpm[rowKpm][colKpm];

        let U2 = this.state.N * this.state.Vpm * this.state.S * Kpm;

        let Us = (U1 + U2) * this.state.Kez;

        let m = this.state.m;
        let K = this.state.K;
        K = Math.round(K * 10) / 10;
        let Uz = (36.6 * 0.22 * m * K) + (1.6 * 0.125 * m * K) + (93.5 * 0.002 * m * K) + (108 * 0.012 * m * K);

        let Ug = Us * 0.05;

        let U = Us + Uz + Ug;

        U = Math.round(U * 100) / 100;

        this.setState({
            res: U
        });
    };

    render () {
        const {classes} = this.props;
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    Определение ущерба от снижения почвозащитных, санитарно-гигиенических,
                    водоохранных и других средообразующих функций леса
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Укажите объем корневого запаса древесины в м3.
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.V}
                    onChange={this.handleChange("V")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Выберите вид деревьев:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.tree}
                            onChange={this.handleChange("tree")}
                        >
                            <MenuItem value={"sosna"}>Сосна</MenuItem>
                            <MenuItem value={"el"}>Ель</MenuItem>
                            <MenuItem value={"pihta"}>Пихта</MenuItem>
                            <MenuItem value={"bereza"}>Берёза</MenuItem>
                            <MenuItem value={"osina"}>Осина</MenuItem>
                            <MenuItem value={"dub"}>Дуб</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Укажите диаметр насаждений в см (чётное число)
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.diametr}
                    onChange={this.handleChange("diametr")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Выберите растояние вывозки, км:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.dist}
                            onChange={this.handleChange("dist")}
                        >
                            <MenuItem value={1}>до 10</MenuItem>
                            <MenuItem value={2}>10,1-25</MenuItem>
                            <MenuItem value={3}>25,1-40</MenuItem>
                            <MenuItem value={4}>40,1-60</MenuItem>
                            <MenuItem value={5}>60,1-80</MenuItem>
                            <MenuItem value={6}>80,1-100</MenuItem>
                            <MenuItem value={7}>100,1 и более</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Выберите вид пожара:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.pozhar}
                            onChange={this.handleChange("pozhar")}
                        >
                            <MenuItem value={"nizB"}>Низовой беглый</MenuItem>
                            <MenuItem value={"nizU"}>Низовой устойчивый</MenuItem>
                            <MenuItem value={"verh"}>Верховой</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Выберите интенсивность пожара:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.intens}
                            onChange={this.handleChange("intens")}
                        >
                            <MenuItem value={0}>Слабый</MenuItem>
                            <MenuItem value={4}>Средний</MenuItem>
                            <MenuItem value={8}>Сильный</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Выберите вид древесины:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.wood}
                            onChange={this.handleChange("wood")}
                        >
                            <MenuItem value={0}>Деловая древесина без коры (крупная)</MenuItem>
                            <MenuItem value={1}>Деловая древесина без коры (средняя)</MenuItem>
                            <MenuItem value={2}>Деловая древесина без коры (мелкая)</MenuItem>
                            <MenuItem value={3}>Дровяная древесина</MenuItem>
                        </Select>
                    </FormControl>
                </form>

                <br/>
                <Typography variant="subtitle1" gutterBottom>
                    Укажите норматив затрат на выращивание 1 га насаждений до возраста смыкания крон в руб/га.
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.N}
                    onChange={this.handleChange("N")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Укажите процент потерь молодняка
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.Vpm}
                    onChange={this.handleChange("Vpm")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Укажите площадь участка, поврежденного пожаром в м2
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.S}
                    onChange={this.handleChange("S")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Выберите возраст погибших молодняков:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.ageM}
                            onChange={this.handleChange("ageM")}
                        >
                            <MenuItem value={0}>1-5</MenuItem>
                            <MenuItem value={1}>6-10</MenuItem>
                            <MenuItem value={2}>11-20</MenuItem>
                            <MenuItem value={3}>21-30</MenuItem>
                            <MenuItem value={4}>31-40</MenuItem>
                            <MenuItem value={5}>41-50</MenuItem>
                            <MenuItem value={6}>51-60</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Выберите вид погибших молодняков:
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.treeM}
                            onChange={this.handleChange("treeM")}
                        >
                            <MenuItem value={0}>Хвойные (кроме кедра) и твердолиственные породы</MenuItem>
                            <MenuItem value={1}>Кедр</MenuItem>
                            <MenuItem value={2}>Мягколиственные породы</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Typography variant="subtitle1" gutterBottom>
                    Укажите коэффициент экологической значимости лесов
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.Kez}
                    onChange={this.handleChange("Kez")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <br />
                <Typography variant="h6" gutterBottom>
                    Определение ущерба от загрязнения окружающей среды продуктами горения
                </Typography>
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
                    Укажите массу сгоревшей биомассы леса в т
                </Typography>
                <TextField
                    id="standard-number"
                    value={this.state.m}
                    onChange={this.handleChange("m")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="dense"
                />
                <Typography variant="subtitle1" gutterBottom>
                    Результат:
                    {this.state.res}
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

Forest.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Forest);
