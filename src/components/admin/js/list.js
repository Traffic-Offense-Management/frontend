
export const columns = [
    [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "username",
            accessor: "username",
        },
        {
            Header: "position",
            accessor: "position",
        }
    ],
    [
        {
            Header: "Police ID",
            accessor: "name.title",
        },
        {
            Header: "First Name",
            accessor: "name.first",
        },
        {
            Header: "Last Name",
            accessor: "name.last",
        },
        {
            Header: "Username",
            accessor: "email",
        },
        {
            Header: "Station",
            accessor: "location.city",
        },
    ],
    [
        {
            Header: "Station ID",
            accessor: "sid",
        },
        {
            Header: "Station Name",
            accessor: "sname",
        },
        {
            Header: "Station Address",
            accessor: "saddress",
        },
    ],
    [
        {
            Header: "Complaint ID",
            accessor: "cid",
        },
        {
            Header: "Description",
            accessor: "cdesc",
        },
        {
            Header: "Date",
            accessor: "cdate",
        }
    ],
    [
        {
            Header: "Fine ID",
            accessor: "oid",
        },
        {
            Header: "Name",
            accessor: "oname",
        },
        {
            Header: "Description",
            accessor: "odesc",
        },
        {
            Header: "DL Number",
            accessor: "odl",
        },
        {
            Header: "Fine",
            accessor: "ofine",
        },
        {
            Header: "Place",
            accessor: "oplace",
        },
        {
            Header: "Time",
            accessor: "otime",
        }
    ],
    [
        {
            Header: "Camera ID",
            accessor: "cid",
        },
        {
            Header: "Camera Location",
            accessor: "clocation",
        },
        {
            Header: "token",
            accessor: "ctoken",
        }
    ]
];

export let navpages = [
    "Authority",
    "Police",
    "Stations",
    "Complaints",
    "Offenses",
    "Camera"
];

export let options = [
    2,
    2,
    2,
    1,
    1,
    2
]