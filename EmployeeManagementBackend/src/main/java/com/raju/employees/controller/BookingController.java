package com.raju.employees.controller;

import com.raju.employees.database.model.Booking;
import com.raju.employees.database.repository.BookingRepository;
import com.raju.employees.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // get all booking rest api
    @GetMapping("bookings")
    public List<Booking> getAll() {
        return bookingRepository.findAll();
    }

    // create new booking rest api
    @PostMapping("bookings")
    public Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    // get booking by id rest api
    @GetMapping("bookings/{id}")
    public ResponseEntity<Booking> getBooking(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id " + id));
        return ResponseEntity.ok(booking);
    }

    // update booking rest api

    @PutMapping("bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetail) {
        Booking booking = bookingRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id " + id));
        /*booking.setFirstName(bookingDetail.getFirstName());
        booking.setLastName(bookingDetail.getLastName());
        booking.setEmailId(bookingDetail.getEmailId());*/

        Booking updatedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(updatedBooking);
    }

    // delete booking rest api

    @DeleteMapping("bookings/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id " + id));

        bookingRepository.delete(booking);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
