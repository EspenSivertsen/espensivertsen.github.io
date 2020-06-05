/**
*FILENAME: openingHoursInfo.js
*
*WRITTEN BY: André F, Andreas R, Espen S, Kim-Erling R, Marius I.S
*Created as part of a website creation project for the NTNU course IT2805 WEBTEK HØST 2016.
*
*WHEN: October / November 2016
*
*PURPOSE: This file contains the opeing hours information.
*/


/**
 *=========================================================================
 *=======================INSTRUCTIONS======================================
 *=========================================================================
 * 1)Keep the same format and structure, but edit the numbers, and strictly only the numbers, to change the opeing times.
 * 2)To set a day as closed, simply set both opening and closing hours to the same value, as is currently the case for sunday.
 * The closing time passing into the next day, and thus a lower value than the opeing time, is automatically taken care of.
 * Just mimic the bellow entries.
 * The numbers after the '//' commented name of the day in english is just an index note, dont mind it.
 */


var hoursArray = [
             {
                 open: '15:00',
                 close: '00:00',
                 day: "Mandag"
             }, // Monday - 0.

             {
                 open: '15:00',
                 close: '02:00',
                 day: "Tirsdag"
             }, // Tuesday - 1.

             {
                 open: '15:00',
                 close: '02:00',
                 day: "Onsdag"
             }, //Wednesday - 2

             {
                 open: '15:00',
                 close: '02:00',
                 day: "Torsdag"
             }, // Thursday - 3
             
             {
                 open: '12:00',
                 close: '02:00',
                 day: "Fredag"
             }, // Friday - 4

             {
                 open: '12:00',
                 close: '02:00',
                 day: "Lørdag"
             }, // Saturday - 5
             {
                 open: '08:00',
                 close: '08:00',
                 day: "Søndag"
             }, // Sunday, index 6. Closed. Note: Just set opening hours to same time to mark the day as closed
         ];