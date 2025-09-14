import { useAuth } from '../context/AuthContext';

const WalletPage = () => {
  const { user, getTransactions } = useAuth();
  const transactions = getTransactions();

  const getTransactionIcon = (type) => {
    return type === 'earned' ? '💰' : '💸';
  };

  const getTransactionColor = (type) => {
    return type === 'earned' ? 'text-green-600' : 'text-red-600';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet 💳</h1>
        <p className="text-gray-600">
          Manage your credits and view transaction history
        </p>
      </div>

      {/* Credit Balance Card */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
        <div className="text-center">
          <div className="text-6xl mb-4">💎</div>
          <div className="text-5xl font-bold mb-2">{user?.credits || 100}</div>
          <div className="text-xl opacity-90">Available Credits</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white border-opacity-20">
          <div className="text-center">
            <div className="text-2xl font-bold">{transactions.filter(t => t.type === 'earned').length}</div>
            <div className="text-sm opacity-80">Credits Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{transactions.filter(t => t.type === 'spent').length}</div>
            <div className="text-sm opacity-80">Credits Spent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{transactions.length}</div>
            <div className="text-sm opacity-80">Total Transactions</div>
          </div>
        </div>
      </div>

      {/* How Credits Work */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Credits Work 📚</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🎁</div>
              <div>
                <h3 className="font-semibold text-gray-900">Earn Credits</h3>
                <p className="text-gray-600 text-sm">Get +20 credits for each successful swap</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="font-semibold text-gray-900">Spend Credits</h3>
                <p className="text-gray-600 text-sm">Use -10 credits when requesting a swap</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="font-semibold text-gray-900">Starting Bonus</h3>
                <p className="text-gray-600 text-sm">New users start with 100 free credits</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">⭐</div>
              <div>
                <h3 className="font-semibold text-gray-900">Premium Features</h3>
                <p className="text-gray-600 text-sm">More credits unlock priority matching</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction History 📋</h2>
        
        {transactions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No transactions yet</h3>
            <p className="text-gray-600">
              Start swapping to see your transaction history here!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                    <p className="text-sm text-gray-500">{formatDate(transaction.timestamp)}</p>
                  </div>
                </div>
                <div className={`text-lg font-bold ${getTransactionColor(transaction.type)}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Credit Tips */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Credit Tips</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Complete swaps successfully to earn more credits</li>
          <li>• Keep your profile updated to attract better matches</li>
          <li>• Be responsive to match requests to maintain high rating</li>
          <li>• Credits never expire - save them for premium services</li>
        </ul>
      </div>
    </div>
  );
};

export default WalletPage;