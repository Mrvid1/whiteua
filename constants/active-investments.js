// constants/active-investments.js
import { ref , onMounted } from 'vue';
import { investments } from '@/constants/investments'; // Подключаем массив инвестиций

const { $api } = useNuxtApp();
const GetPlans = async () => {
  const response = await $api.post('/user/myinvest.php',{
    email : atob(localStorage.getItem('token')),
  }); 
  
  console.log(response)
}
export const activeInvestments = ref([
  { 
    id: 1,
    planId: 4, 
    title: '', 
    icon: '',  
    amount: 0, // Будет обновляться
    startDate: '2024-03-15',
    duration: 5,
    progress: 0, 
    earned: 0, 
    status: 'active',
    endDate: '2024-05-20'
  },
  {
    id: 2,
    planId: 2,
    title: '',
    icon: '',
    amount: 0,
    startDate: '2024-02-01',
    duration: 365,
    progress: 0,
    earned: 0,
    status: 'active',
    endDate: '2025-02-01'
  },
  {
    id: 3,
    planId: 1,
    title: '',
    icon: '',
    amount: 0,
    startDate: '2023-12-01',
    duration: 180,
    progress: 0,
    earned: 0,
    status: 'completed'
  }
]);

// Функция обновления активных инвестиций
const updateActiveInvestments = () => {
  const today = new Date();
  
  activeInvestments.value = activeInvestments.value.map(investment => {
    const investmentData = investments.find(inv => inv.id === investment.planId);

    if (investmentData) {
      const startDate = new Date(investment.startDate);
      const totalDuration = investment.duration;
      
      // Вычисляем прогресс
      const elapsedDays = Math.min((today - startDate) / (1000 * 60 * 60 * 24), totalDuration);
      const progress = Math.round((elapsedDays / totalDuration) * 100);

      return {
        ...investment,
        title: investmentData.title,
        icon: investmentData.icon, 
        amount: investmentData.amount, // Берём сумму вложений из инвестиций
        earned: investmentData.profit, // Берём заработок из инвестиций
        progress
      };
    }
    
    return investment;
  });
};

  GetPlans()

// Вызываем обновление активных инвестиций
// updateActiveInvestments();
