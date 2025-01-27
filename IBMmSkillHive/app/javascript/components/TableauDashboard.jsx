import React, { useEffect } from 'react';

const TableauDashboard = () => {
  useEffect(() => {
    const vizContainer = document.getElementById('tableauViz');
    const vizUrl = 'https://public.tableau.com/views/Beehive/Dashboard1?:language=es-ES&:display_count=n&:origin=viz_share_link';
    const options = {
      width: '100%',
      height: '800px',
      hideTabs: true
    };
    
    const viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }, []);

  return (
    <div id="tableauViz" style={{ margin: '0 auto', display: 'block', width: '60vw', height: '40vw' }}></div>
  );
}

export default TableauDashboard;
