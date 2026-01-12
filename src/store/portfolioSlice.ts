import { createSlice } from '@reduxjs/toolkit';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData } from '../types';

const initialState: PortfolioData = portfolioData;

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export const selectProfile = (state: { portfolio: PortfolioData }) => state.portfolio.profile;
export const selectProjects = (state: { portfolio: PortfolioData }) => state.portfolio.projects;
export const selectSkills = (state: { portfolio: PortfolioData }) => state.portfolio.skills;

export default portfolioSlice.reducer;