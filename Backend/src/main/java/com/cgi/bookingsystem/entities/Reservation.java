package com.cgi.bookingsystem.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne
    private Table table;
    
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private int reservationSize;
    private String customerName;
    private String customerEmail;
}