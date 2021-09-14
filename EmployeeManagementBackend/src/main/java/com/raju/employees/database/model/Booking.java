package com.raju.employees.database.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "place")
    private String place;

    @Column(name = "bill_number")
    private String billNumber;

    @Column(name = "start_time")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="dd/MM/yyyy hh:mm a")
    private Date startTime;

    @Column(name = "end_time")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="dd/MM/yyyy hh:mm a")
    private Date endTime;

    @Column(name = "total_amount")
    private Long totalAmount;

    @Column(name = "advance_amount")
    private Long advanceAmount;

    @Column(name = "balance_amount")
    private long balanceAmount;

    @Column(name = "driver_charge")
    private long driverCharge;

    @Column(name = "owner_charge")
    private long ownerCharge;

    @Column(name = "remarks")
    private String remarks;

    public Booking() {
    }

    public Booking(String name, String place, String billNumber, Date startTime, Date endTime,
                   Long totalAmount, Long advanceAmount, long balanceAmount, long driverCharge, long ownerCharge,
                   String remarks) {
        this.name = name;
        this.place = place;
        this.billNumber = billNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalAmount = totalAmount;
        this.advanceAmount = advanceAmount;
        this.balanceAmount = balanceAmount;
        this.driverCharge = driverCharge;
        this.ownerCharge = ownerCharge;
        this.remarks = remarks;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getBillNumber() {
        return billNumber;
    }

    public void setBillNumber(String billNumber) {
        this.billNumber = billNumber;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Long getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Long getAdvanceAmount() {
        return advanceAmount;
    }

    public void setAdvanceAmount(Long advanceAmount) {
        this.advanceAmount = advanceAmount;
    }

    public long getBalanceAmount() {
        return balanceAmount;
    }

    public void setBalanceAmount(long balanceAmount) {
        this.balanceAmount = balanceAmount;
    }

    public long getDriverCharge() {
        return driverCharge;
    }

    public void setDriverCharge(long driverCharge) {
        this.driverCharge = driverCharge;
    }

    public long getOwnerCharge() {
        return ownerCharge;
    }

    public void setOwnerCharge(long ownerCharge) {
        this.ownerCharge = ownerCharge;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
