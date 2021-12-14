import React from "react";
import { useAuth } from "../context/authContext";
import { Avatar, IconButton } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { Box } from "@mui/system";

const ProfileSection = (props) => {
  const { user } = useAuth();
  return (
    <React.Fragment>
   
        <div>
          <Avatar
          id="myDropdown" class="dropdown-content"
          onClick={props.handleLoggedOut}
          style={{ cursor: "pointer" }}
            style={{
              position: "absolute",
              right: 25,
              top: "30px",
            }}
            alt="Remy Sharp"
            src={user && user.photoURL}
            sx={{ width: 70, height: 70 }}
          />

          <Box ml={3} className="profileName" 
         style={{
          position: "absolute",
          right: 5,
          top: "30px",
        }}>
            {/* {user && user.displayName} */}
            <br />
            {/* {user && user.email} <br /> */}
            <Box style={{ cursor: "pointer" }} onClick={props.handleLoggedOut}>
              logout
              <IconButton>
                <TiArrowBack />
              </IconButton>
            </Box>
          </Box>
        </div>
    </React.Fragment>
  );
};

export default ProfileSection;
