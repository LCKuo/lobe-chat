'use client';

import { useTranslation } from 'react-i18next';

import { OllamaProviderCard } from '@/config/modelProviders';

import { ProviderItem } from '../../type';
import Checker from './Checker';

export const useOllamaProvider = (): ProviderItem => {
  const { t } = useTranslation('modelProvider');

  return {
    ...OllamaProviderCard,
    checkerItem: {
      children: <Checker />,
      desc: t('ollama.checker.desc'),
      label: t('ollama.checker.title'),
      minWidth: undefined,
    },
    proxyUrl: {
      desc: t('ollama.endpoint.desc'),
      placeholder: 'http://59.125.142.81:11500',
      title: t('ollama.endpoint.title'),
    },
  };
};
