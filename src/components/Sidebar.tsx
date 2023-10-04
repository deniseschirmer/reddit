const Sidebar = () => {
  const mainMenus = [
    { text: "Página Inicial", icon: "fas fa-home" },
    { text: "Popular", icon: "fas fa-chart-line" },
  ];
  const libraryMenus = [
    { text: "History", icon: "fas fa-history" },
    { text: "Watch later", icon: "fas fa-clock" },
    { text: "Liked videos", icon: "fas fa-thumbs-up" },
    { text: "Show more", icon: "fas fa-arrows-alt" },
  ];
  const bestMenus = [
    { text: "Jogos", icon: "fas fa-music" },
    { text: "Esportes", icon: "fas fa-basketball-ball" },
    { text: "Negócios", icon: "fas fa-gamepad" },
    { text: "Cripto", icon: "fas fa-film" },
    { text: "Televisão", icon: "fas fa-tv" },
    { text: "Celebridades", icon: "fas fa-newspaper" },
  ];
  return (
    <div className="sidebar border-b border-r mr-2">
      <ul className="menu-group">
        {mainMenus.map((menu) => (
          <li className="menu-item">
            <i className={menu.icon}></i>
            <span className="text">{menu.text}</span>
          </li>
        ))}
      </ul>
      <h4 className="menu-group-label">Library</h4>
      <ul className="menu-group">
        {libraryMenus.map((menu) => (
          <li className="menu-item">
            <i className={menu.icon}></i>
            <span className="text">{menu.text}</span>
          </li>
        ))}
      </ul>
      <h4 className="menu-group-label">Best of Youtube</h4>
      <ul className="menu-group">
        {bestMenus.map((menu) => (
          <li className="menu-item">
            <i className={menu.icon}></i>
            <span className="text">{menu.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
