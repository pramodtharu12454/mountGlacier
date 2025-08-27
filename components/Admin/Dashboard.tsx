"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@mui/material";
import { ShoppingCart, Users, DollarSign, MessageSquare } from "lucide-react";

export default function Dashboardadmin() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12% from last month",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Total Orders",
      value: "1,429",
      change: "+8% from last month",
      icon: <ShoppingCart className="h-5 w-5 text-purple-600" />,
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+23% from last month",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Support Tickets",
      value: "73",
      change: "-5% from last month",
      icon: <MessageSquare className="h-5 w-5 text-gray-600" />,
    },
  ];

  const orders = [
    { id: "#ORD-001", name: "John Doe", price: "$299.99", status: "Delivered" },
    {
      id: "#ORD-002",
      name: "Jane Smith",
      price: "$149.99",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      name: "Mike Johnson",
      price: "$79.99",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      name: "Sarah Wilson",
      price: "$199.99",
      status: "Pending",
    },
  ];

  const users = [
    { name: "Alice Cooper", email: "alice@example.com", time: "2 hours ago" },
    { name: "Bob Martin", email: "bob@example.com", time: "5 hours ago" },
    { name: "Carol Davis", email: "carol@example.com", time: "1 day ago" },
    { name: "David Brown", email: "david@example.com", time: "2 days ago" },
  ];

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Welcome to your store admin dashboard
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Orders & Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {orders.map((order, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.name}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold">{order.price}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Users */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {users.map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <Avatar>{user.name[0]}</Avatar>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{user.time}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">
              View All Users
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
