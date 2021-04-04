type Kind = {
  [key: string]: {
    variant: string;
  };
};

export const kind: Kind = {
  inherit: {
    variant: "secondary",
  },
  establish: {
    variant: "primary",
  },
  prune: {
    variant: "danger",
  },
};
