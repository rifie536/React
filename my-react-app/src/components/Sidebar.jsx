import React from 'react';

const Sidebar = () => {
  const links = [
    {
      title: '公害防止管理者とは',
      url: '#',
      description: '資格の概要と取得方法'
    },
    {
      title: '試験の種類',
      url: '#',
      description: '水質関係の試験区分'
    },
    {
      title: '学習リソース',
      url: '#',
      description: 'おすすめの参考書と教材'
    },
    {
      title: '合格体験記',
      url: '#',
      description: '先輩たちの学習方法'
    },
    {
      title: '問題集',
      url: '#',
      description: '各年度の過去問題'
    }
  ];

  return (
    <aside className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">メニュー</h2>
      <nav className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div className="font-medium text-gray-800">{link.title}</div>
            <div className="text-sm text-gray-600">{link.description}</div>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
