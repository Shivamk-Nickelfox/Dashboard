import React from "react";
import { Drawer, List, Toolbar } from "@mui/material";
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import SellIcon from '@mui/icons-material/Sell';
import CampaignIcon from '@mui/icons-material/Campaign';

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Customers", icon: <PeopleIcon />, path: "/customers" },
    { text: "Purchase", icon: <ShoppingCartIcon />, path: "/purchase" },
    { text: "HR", icon: <PeopleIcon />, path: "/hr" },
    { text: "Finance", icon: <AttachMoneyIcon />, path: "/finance" },
    { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
    { text: "Masters", icon: <SettingsIcon />, path: "/masters" },
    { text: "Sell", icon: <SellIcon />, path: "/sell" },
    { text: "Marketing", icon: <CampaignIcon />, path: "/marketing" }
];

const Sidebar = ({ isOpen }) => {
    return (
        <Drawer variant="permanent" open={isOpen} sx={{ width: 360, flexShrink: 0 }}>
            <Toolbar />
            <Divider sx={{ margin: 0.5}} />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
