import Table, {
  FixedType,
  TableBody,
  TableHead,
} from "@/Components/Table/table";
import Operations from "@/Components/Table/operations";
import "@/Components/Table/style.css";
import fixedWrapper from "@/Components/Table/fixedWrapper";

export default function table() {
  const tHead: TableHead[] = [
    {
      content: [
        {
          content: "",
          fixed: FixedType.left,
        },
        {
          content: "User",
        },
        {
          content: "Manager",
        },
        {
          content: "Admin",
        },
        {
          content: "Another one",
        },
        {
          content: "Another two",
        },
      ],
    },
  ];
  const tBody: TableBody[] = [
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      style: {
        background: "rgba(0, 0, 0, 0.05)",
      },
      content: [
        {
          content: "Заимствует",
          bold: true,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
    {
      content: [
        {
          content: "Пользователи",
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
        {
          component: Operations,
        },
      ],
    },
  ];

  const FixedTable = fixedWrapper(Table);
  return <FixedTable tHead={tHead} tBody={tBody} />;
}
