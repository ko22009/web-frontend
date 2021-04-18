import colors from "@/styled/global/colors";

const style = `
  .dark {
    background: ${colors.bgDarkMode};
  }
  .bg-gray {
    background: ${colors.bgGray};
  }
  .dark .bg-gray {
    background: ${colors.bgGrayDarken};
  }
`;

export default style;
