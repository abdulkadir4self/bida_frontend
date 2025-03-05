import React from 'react';
import { IndianRupee, Building2, Wallet, CreditCard, ParkingCircle, CornerUpRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function DashboardStats() {
  const { t } = useTranslation();

  const stats = [
    {
      label: 'Total Registration Amount',
      value: '₹24.5L',
      icon: IndianRupee,
      color: 'bg-blue-500'
    },
    {
      label: 'Total Freehold Amount',
      value: '₹18.2L',
      icon: Building2,
      color: 'bg-green-500'
    },
    {
      label: 'Total Lease Rent',
      value: '₹12.3L',
      icon: Wallet,
      color: 'bg-yellow-500'
    },
    {
      label: 'Total Service Charge',
      value: '₹8.5L',
      icon: CreditCard,
      color: 'bg-purple-500' 
    },
    {
      label: 'Total Park Charge',
      value: '₹6.2L',
      icon: ParkingCircle,
      color: 'bg-indigo-500' 
    },
    {
      label: 'Total Corner Charge',
      value: '₹4.8L',
      icon: CornerUpRight,
      color: 'bg-teal-500' 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-2 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{stat.label}</h3>
          </div>
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              {t('viewDetails')} →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}