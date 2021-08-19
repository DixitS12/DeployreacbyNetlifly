import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, PieChart, Pie, Sector, Cell, Label, ReferenceLine, BarChart
} from 'recharts';

const data = [
    {
        name: 'January 2013',
        uv: 500,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Febuary 2013',
        uv: 400,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'March 2013',
        uv: 450,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Aplril 2013',
        uv: 450,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'May 2013',
        uv: 600,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'June 2013',
        uv: 580,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'July 2013',
        uv: 540,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'August 2013',
        uv: 700,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'September 2013',
        uv: 580,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'Octomber 2013',
        uv: 300,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'November 2013',
        uv: 480,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'December 2013',
        uv: 400,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'January 2014',
        uv: 250,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Febuary 2014',
        uv: 180,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'March 2014',
        uv: 500,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'April 2014',
        uv: 480,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'May 2014',
        uv: 400,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'June 2014',
        uv: 580,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'July 2014',
        uv: 650,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'August 2014',
        uv: 600,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'September 2014',
        uv: 800,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'Octomber 2014',
        uv: 650,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'November 2014',
        uv: 350,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Decmber 2014',
        uv: 300,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'January 2015',
        uv: 370,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Febuary 2015',
        uv: 500,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'March 2015',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'April 2015',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'May 2015',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'June 2015',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'July 2015',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'August 2015',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'September 2015',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Octomber 2015',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'November 2015',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'December 2015',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'January 2016',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Febuary 2016',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'March 2016',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'April 2016',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'May 2016',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
    {
        name: 'June 2016',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    
];

const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        //maxWidth: 345,
        textAlign: 'left'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardHeader: {
        backgroundColor: '#f8f9fd',
        color: '#859dda',
    },
    cardContent: {
        margin: 'auto',
    }
}));

export default function LineGraph() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={3}>
        <Grid item xs={8}>
            <Card className={classes.root}>
                <CardHeader className={classes.cardHeader}
          /*      avatar={*/
          /*          <Avatar aria-label="recipe" className={classes.avatar}>*/
          /*              R*/
          /*</Avatar>
          //{/*      }*/
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Sales Trends"
                /*subheader="September 14, 2016"*/
            />
                    <CardContent >
                        <ResponsiveContainer width="95%" height={400} className={classes.cardContent}>
                        {/*<ComposedChart*/}
                            
                        {/*    data={data}*/}
                        {/*    margin={{*/}
                        {/*        top: 20,*/}
                        {/*        right: 20,*/}
                        {/*        bottom: 20,*/}
                        {/*        left: 20,*/}
                        {/*    }} */}
                        {/*>*/}
                        {/*        <CartesianGrid strokeDasharray="1" vertical={false} />*/}
                        {/*        <XAxis label={{ value: "Order Date (Monthly)", dy: 25 }} padding={{right:20}} dataKey="name" scale="band" />*/}
                        {/*        <YAxis yAxisId="left" label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} orientation="left" axisLine={false} tickLine={false} />*/}
                        {/*        <YAxis yAxisId="right" label={{ value: 'Sales', angle: -90, position: 'insideRight' }} orientation="right" axisLine={false} tickLine={false} />*/}
                        {/*    <Tooltip />*/}
                        {/*    <Legend wrapperStyle={{ paddingTop: '50px' }} />*/}
                        {/*        <Bar yAxisId="left" dataKey="uv" barSize={10} fill="#5cc390" />*/}
                        {/*        <Line yAxisId="right" type="linear" dataKey="uv" stroke="#4e6dd2" dot={false} strokeWidth={3}/>*/}
                            {/*</ComposedChart>*/}
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 20,
                                    bottom: 20,
                                }}
                            >
                                <XAxis
                                    dataKey="name"
                                />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                <Bar
                                    dataKey="Count"
                                    stackId="a"
                                    fill="#5cc390"
                                />
                            </BarChart>
                    </ResponsiveContainer>
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardHeader className={classes.cardHeader}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Segment Breakdown"
                    />
                    <CardContent >
                        <ResponsiveContainer width="95%" height={400} className={classes.cardContent}>
                        <PieChart >
                            <Pie
                                data={dataPie}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
            </CardContent>
            </Card>
            </Grid>
        </Grid>
    );
}
