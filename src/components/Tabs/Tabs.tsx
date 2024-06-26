import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabId ? tabId : '';

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const findTab = tabs.find(tab => tab.id === selectedTab);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={classNames({
                    'is-active': tab.id === selectedTab,
                  })}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {findTab ? (
            <div className="block" data-cy="TabContent">
              {findTab?.content}
            </div>
          ) : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
