package com.ajubravin.employeemanagementsystem.controller;

import com.ajubravin.employeemanagementsystem.dto.LoginRequest;
import com.ajubravin.employeemanagementsystem.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        if (loginRequest.getUsername().equals("admin")
                && loginRequest.getPassword().equals("admin123")) {

            String token = jwtService.generateToken(loginRequest.getUsername());

            return ResponseEntity.ok(
                    Map.of(
                            "message", "Login successful",
                            "token", token
                    )
            );
        }

        return ResponseEntity.status(401)
                .body(Map.of("message", "Invalid username or password"));
    }
}