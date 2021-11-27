const tableColumns = [
    { title: "Name", field: "name" },
    {
        title: "Lastname",
        field: "lastname",
        initialEditValue: "lastname"
    },
    {
        title: "Civil id",
        field: "civilId",
        type: "numeric"
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
        title: "Location",
        field: "location",
        lookup: { 1: "San Luis", 2: "Villa Mercedes", 3: "Merlo" }
    },
    {
        title: "E-mail",
        field: "email",
        initialEditValue: "anything@example.com"
    }
];

export default tableColumns;
