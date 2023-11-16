import { parse, stringify } from 'qs';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type TabType = {
  code: string;
  label: React.ReactNode;
  component?: React.ReactNode;
};

const useTabs = (tabs: TabType[]) => {
  const location = useLocation();
  const { tab, ...others } = parse(location.search, { ignoreQueryPrefix: true });

  const [activeTab, setActiveTab] = useState((tabs.find((item) => item.code === tab) ?? tabs[1]).code);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, value: string) => {
      setActiveTab(value);

      if (others.page) others.page = '1';
      window.history.replaceState(null, '', stringify({ ...others, tab: value }, { addQueryPrefix: true }));
    },
    [others],
  );

  return [activeTab, handleChangeTab] as [string, (event: SyntheticEvent<Element, Event>, value: string) => void];
};

export default useTabs;
