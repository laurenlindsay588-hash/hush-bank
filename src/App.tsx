import { AccountSummary } from './components/AccountSummary';
import { SpendingTrends } from './components/SpendingTrends';
import { RecentTransactions } from './components/RecentTransactions';
import { SavingsGoals } from './components/SavingsGoals';
import { QuickActions } from './components/QuickActions';
import { DashboardHeader } from './components/DashboardHeader';
import './styles/global.css';

const accounts = [
  {
    name: 'Everyday Checking',
    balance: 8124.34,
    available: 7934.75,
    number: '••• 1342',
    currency: 'USD',
  },
  {
    name: 'Savings Vault',
    balance: 14290.22,
    available: 14290.22,
    number: '••• 7489',
    currency: 'USD',
  },
];

const transactions = [
  { date: 'Jul 25', description: 'Payroll deposit', amount: 3250.0, type: 'credit' },
  { date: 'Jul 24', description: 'Grocery market', amount: -124.76, type: 'debit' },
  { date: 'Jul 23', description: 'Utility bill', amount: -89.45, type: 'debit' },
  { date: 'Jul 22', description: 'Coffee shop', amount: -14.6, type: 'debit' },
  { date: 'Jul 21', description: 'Travel refund', amount: 98.22, type: 'credit' },
];

const trends = [
  { category: 'Food & Dining', amount: 420, color: '#4f46e5' },
  { category: 'Shopping', amount: 360, color: '#10b981' },
  { category: 'Bills', amount: 290, color: '#f59e0b' },
  { category: 'Transport', amount: 180, color: '#ec4899' },
];

const goals = [
  { title: 'Vacation Fund', progress: 58, target: 5000, current: 2900 },
  { title: 'Emergency Cash', progress: 82, target: 12000, current: 9840 },
];

const quickActions = ['Send money', 'Pay bill', 'Deposit check', 'Freeze card'];

function App() {
  return (
    <div className="app-shell">
      <DashboardHeader />
      <main className="dashboard-grid">
        <section className="panel panel-welcome">
          <div>
            <p className="eyebrow">Welcome back, Nora</p>
            <h1>Hush Bank Dashboard</h1>
            <p className="text-muted">
              Monitor balances, track spending patterns, and manage savings goals with secure, modern banking tools.
            </p>
          </div>
          <div className="hero-stat">
            <span>Total net worth</span>
            <strong>$22,414.56</strong>
          </div>
        </section>

        <AccountSummary accounts={accounts} />

        <QuickActions actions={quickActions} />

        <SpendingTrends trends={trends} />

        <section className="panel panel-transactions">
          <RecentTransactions transactions={transactions} />
        </section>

        <SavingsGoals goals={goals} />
      </main>
    </div>
  );
}

export default App;
