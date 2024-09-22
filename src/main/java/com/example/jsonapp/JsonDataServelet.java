package com.example.jsonapp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/jsonData")
public class JsonDataServelet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        // Implement logic to fetch data from JSONPlaceholder or other API if necessary
        // Send static response or process additional backend logic if needed
        resp.getWriter().write("{\"status\":\"Servlet Running\"}");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Optional: Process POST requests if needed
    }
}
