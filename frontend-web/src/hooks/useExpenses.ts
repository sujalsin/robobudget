import { useQuery, useMutation, useQueryClient } from 'react-query';
import { expenses } from '../services/api';

export const useExpenses = () => {
  const queryClient = useQueryClient();

  const { data: expensesList, isLoading } = useQuery('expenses', expenses.getAll);

  const createExpense = useMutation(expenses.create, {
    onSuccess: () => {
      queryClient.invalidateQueries('expenses');
    },
  });

  const updateExpense = useMutation(
    ({ id, data }: { id: string; data: any }) => expenses.update(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('expenses');
      },
    }
  );

  const deleteExpense = useMutation(expenses.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries('expenses');
    },
  });

  return {
    expenses: expensesList || [],
    isLoading,
    createExpense: createExpense.mutate,
    updateExpense: updateExpense.mutate,
    deleteExpense: deleteExpense.mutate,
    isCreating: createExpense.isLoading,
    isUpdating: updateExpense.isLoading,
    isDeleting: deleteExpense.isLoading,
  };
};
