const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px'
};

const theme = {
  mainColor: 'rgb(255, 87, 87);',
  fontGray: 'rgb(158, 158, 158);',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default theme;
