import React, { useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const CustomListItem = styled(ListItem)(({ isActive }) => ({
  height: "52px",

  borderBottom: " 1px solid var(--ced-color-global-neutral-4)",
  "&:hover": {
    boxShadow: "0px -1px 0px rgba(206, 207, 205, 1) inset",
    backgroundColor: "var(--ced-color-global-alpha-neutral-4) !important",
  },
  "&:focus": {
    outlineColor: "var(--ced-color-global-brand-3) !important",
    borderRadius: "var(--ced-border-radius-base)",
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  backgroundColor: "var(--ced-color-global-alpha-transparent) !important",
  borderWidth: "0",
  color: "var(--ced-color-text) !important",
  fontWeight: "var(--ced-font-weight-normal) !important",
  fontSize: "var(--ced-font-size-small)",
  letterSpacing: "0.3px",
  display: "flex",
  alignContent: "center",
  flexWrap: "wrap",
  borderRadius: "var(--ced-border-radius-base)",
  color: "var(--ced-color-text) !important",
  fontWeight: "var(--ced-font-weight-normal) !important",
  fontSize: "var(--ced-font-size-small)",
  letterSpacing: "0.3px",
  lineHeight: "var(--ced-line-height-heading-small)",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

const TabInnerComponent = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
   
    Navigate('/'); // Navigate to the home page
  };

  return (
    <Box sx={{ display: "flex", overflowY: "auto", padding: "8px" }}>
      {/* Left Column (List of Items) */}
      <Box
        sx={{
          width: "250px",
          bgcolor: "#fff",
          padding: "2px",
          flexShrink: 0,
          border: "1px solid #b9bbc0",
          padding: "0",
          WebkitBoxShadow: "0 8px 6px -6px black",
          MozBoxShadow: "0 8px 6px -6px black",
          boxShadow: "0 8px 6px -6px black",
        }}
      >
        <List sx={{ p: 0 }}>
          <CustomListItem
            IsActive={activeItem == 1}
            onClick={() => setActiveItem(1)}
            button
            component={NavLink}
            to="/inventory"
            sx={{
              borderLeft:
                activeItem === 1
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
          >
            <CustomListItemText primary="Inventory" />
          </CustomListItem>
          <CustomListItem
            IsActive={activeItem == 2}
            onClick={() => setActiveItem(2)}
            sx={{
              borderLeft:
                activeItem === 2
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
            button
            component={NavLink}
            to="/cycle-count"
          >
            <CustomListItemText primary="Cycle Count" />
          </CustomListItem>
          <CustomListItem
            IsActive={activeItem == 3}
            onClick={() => setActiveItem(3)}
            sx={{
              borderLeft:
                activeItem === 3
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
            button
            component={NavLink}
            to="/transaction-history"
          >
            <CustomListItemText primary="Transaction History" />
          </CustomListItem>
          <CustomListItem
            IsActive={activeItem == 4}
            onClick={() => setActiveItem(4)}
            sx={{
              borderLeft:
                activeItem === 4
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
            button
            component={NavLink}
            to="/purchase-history"
          >
            <CustomListItemText primary="Purchase History" />
          </CustomListItem>
          <CustomListItem
            IsActive={activeItem == 5}
            onClick={() => setActiveItem(5)}
            sx={{
              borderLeft:
                activeItem === 5
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
            button
            component={NavLink}
            to="/settings"
          >
            <CustomListItemText primary="Settings" />
          </CustomListItem>

          <CustomListItem
            IsActive={activeItem == 6}
            onClick={() => handleLogout()}
            sx={{
              borderLeft:
                activeItem === 6
                  ? "4px solid var(--ced-color-global-brand-3)"
                  : "2px solid transparent",
            }}
            button
            component={NavLink}
            to="/logout"
          >
            <CustomListItemText primary="Logout" />
          </CustomListItem>
        </List>
      </Box>
      <Box
        sx={{
          width: "10px",
          flexShrink: 0, // Ensures this gap doesn't shrink
        }}
      />
      {/* Right Column (Main Content) */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "0px 10px",
          border: "1px solid #ddd",
          overflowY: "hidden",

          minWidth: 0, // Prevents the right column from causing horizontal overflow
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default TabInnerComponent;
