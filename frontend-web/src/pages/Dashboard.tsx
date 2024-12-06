import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import {
  Add as AddIcon,
  ArrowUpward as IncomeIcon,
  ArrowDownward as ExpenseIcon,
  AccountBalance as BudgetIcon,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data - replace with real data from API
const mockData = [
  { name: 'Jan', expenses: 4000, income: 4400 },
  { name: 'Feb', expenses: 3000, income: 4200 },
  { name: 'Mar', expenses: 2000, income: 4100 },
  { name: 'Apr', expenses: 2780, income: 4300 },
  { name: 'May', expenses: 1890, income: 4200 },
  { name: 'Jun', expenses: 2390, income: 4400 },
];

const Dashboard = () => {
  const [monthlyBudget] = useState(5000);
  const [monthlyExpenses] = useState(2890);
  const [monthlyIncome] = useState(4400);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h2" variant="h6" color="primary">
                Monthly Budget
              </Typography>
              <IconButton size="small">
                <BudgetIcon />
              </IconButton>
            </Box>
            <Typography component="p" variant="h4">
              ${monthlyBudget.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Budget for {new Date().toLocaleString('default', { month: 'long' })}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h2" variant="h6" color="success.main">
                Monthly Income
              </Typography>
              <IconButton size="small" color="success">
                <IncomeIcon />
              </IconButton>
            </Box>
            <Typography component="p" variant="h4">
              ${monthlyIncome.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Income this month
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h2" variant="h6" color="error.main">
                Monthly Expenses
              </Typography>
              <IconButton size="small" color="error">
                <ExpenseIcon />
              </IconButton>
            </Box>
            <Typography component="p" variant="h4">
              ${monthlyExpenses.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Expenses this month
            </Typography>
          </Paper>
        </Grid>

        {/* Chart */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography component="h2" variant="h6" color="primary">
                Income vs Expenses
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => {/* TODO: Implement add expense */}}
              >
                Add Expense
              </Button>
            </Box>
            <ResponsiveContainer>
              <LineChart
                data={mockData}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#4caf50"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#f44336"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
