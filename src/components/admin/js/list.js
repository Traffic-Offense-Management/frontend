
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
            accessor: "police_id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Date of Birth",
            accessor: "dob",
        },
        {
            Header: "Username",
            accessor: "username",
        },
        {
            Header: "Station",
            accessor: "station_id",
        },
    ],
    [
        {
            Header: "Station ID",
            accessor: "station_id",
        },
        {
            Header: "Station Name",
            accessor: "station_name",
        },
        {
            Header: "Station Address",
            accessor: "station_address",
        },
        {
            Header: "Pincode",
            accessor: "pincode",
        },
    ],
    [
        {
            Header: "Complaint ID",
            accessor: "complaint_id",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Status",
            accessor: "status",
        },
        {
            Header: "Police ID",
            accessor: "police_id",
        },
        {
            Header: "Date",
            accessor: "date",
        }
    ],
    [
        {
            Header: "Fine ID",
            accessor: "fine_no",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Status",
            accessor: "status",
        },
        {
            Header: "DL Number",
            accessor: "dl_no",
        },
        {
            Header: "Fine",
            accessor: "fine",
        },
        {
            Header: "Place",
            accessor: "place",
        },
        {
            Header: "Time",
            accessor: "time",
        }
    ],
    [
        {
            Header: "User ID",
            accessor: "userid",
        },
        {
            Header: "Pincode",
            accessor: "pincode",
        },
        {
            Header: "Problem",
            accessor: "problem",
        },
        {
            Header: "Description",
            accessor: "descript",
        },
        {
            Header: "Date",
            accessor: "date",
        }
    ],
    // [
    //     {
    //         Header: "Camera ID",
    //         accessor: "cid",
    //     },
    //     {
    //         Header: "Camera Location",
    //         accessor: "clocation",
    //     },
    //     {
    //         Header: "token",
    //         accessor: "ctoken",
    //     }
    // ]
];

export let navpages = [
    "Authority",
    "Police",
    "Stations",
    "Complaints",
    "Offenses",
    "Malfunction",
    // "Camera"
];

export let options = [
    2,
    2,
    2,
    1,
    1,
    1,
    2
]

export let add_forms = {
    Authority: ["username", "password", "name", "position"],
    Police: ["name", "dob", "username", "station_id", "address", "email", "phone_no", "password"],
    Stations: ["station_name", "station_address", "pincode"],
    Complaints: ["description", "status","police_id", "date", "station_id", "user_id"],
    Offenses: ["name", "status", "dl_no", "vehicle_no","offense_no", "place", "date","time"],
    Malfunction:["userid", "pincode", "problem", "descript","date"],
    Camera: ["cid", "clocation", "ctoken"]
    
}

export let delete_forms = {
    Authority: ["username"],
    Police: ["police_id"],
    Stations: ["station_id"],
    Camera: ["cid"],
}