import { ICategory } from '@/models/Category'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
  categories?: ICategory[]
}

const initialState: CategoryState = {
  categories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state: CategoryState, action: PayloadAction<ICategory>) => {
      if (state.categories === undefined) {
        state.categories = []
      }
      state.categories.push(action.payload)
    },
    deleteCategory: (state: CategoryState, action: PayloadAction<number>) => {
      if (state.categories === undefined) {
        state.categories = []
      }
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      )
    },
    resetCategoryState: () => initialState,
  },
})

export const { addCategory, deleteCategory, resetCategoryState } =
  categorySlice.actions

export default categorySlice.reducer
