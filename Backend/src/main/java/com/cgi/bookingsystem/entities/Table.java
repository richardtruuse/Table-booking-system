package com.cgi.bookingsystem.entities;

import java.util.Set;

import com.cgi.bookingsystem.enums.Feature;
import com.cgi.bookingsystem.enums.Zone;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Table {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int tableNumber;
    private int capacity;
    
    @Enumerated(EnumType.STRING)
    private Zone zone;
    
    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<Feature> features;
    
    private int xPosition;
    private int yPosition;
}