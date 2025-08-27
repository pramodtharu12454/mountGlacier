"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { MoreVertical } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  reply?: string;
};

const initialContacts: Contact[] = [
  {
    id: 1,
    name: "Rohit",
    email: "rohit@example.com",
    phone: "9800000001",
    destination: "Pokhara",
    message: "I want a 3-day tour package.",
  },
  {
    id: 2,
    name: "Sita",
    email: "sita@example.com",
    phone: "9800000002",
    destination: "Chitwan",
    message: "Is there a family package available?",
  },
  {
    id: 3,
    name: "Ram",
    email: "ram@example.com",
    phone: "9800000003",
    destination: "Lumbini",
    message: "Do you provide hotel booking?",
  },
];

export default function ContactMessages() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    contact: Contact
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedContact(contact);
    setReplyText(contact.reply || "");
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleReplyClick = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleSendReply = () => {
    if (selectedContact) {
      setContacts(
        contacts.map((c) =>
          c.id === selectedContact.id ? { ...c, reply: replyText } : c
        )
      );
    }
    setOpenDialog(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
      <TableContainer component={Paper} className="rounded-2xl shadow-md">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Reply</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} hover>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.destination}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>{contact.reply || "-"}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={(e) => handleMenuOpen(e, contact)}>
                    <MoreVertical className="w-5 h-5" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleReplyClick}>Reply</MenuItem>
      </Menu>

      {/* Reply Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Reply to {selectedContact?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Write your reply below:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Reply"
            type="text"
            fullWidth
            multiline
            minRows={3}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSendReply} variant="contained" color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
