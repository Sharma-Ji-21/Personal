import java.time.LocalDate;
import java.util.Scanner;
public class Age {

/*
LocalTime.now() // Current time
LocalDate.now() // Current date
LocalDateTime.now() // Current date and time
*/
public static void main(String[] args) {
    Scanner DOB=new Scanner(System.in);
    System.out.print("Enter your date of birth in YYYY:MM:DD : ");
    String DOB1=DOB.next();
    int PersonYear = Integer.parseInt(DOB1.substring(0,4));
    int PersonMonth = Integer.parseInt(DOB1.substring(5,7));
    int PersonDay = Integer.parseInt(DOB1.substring(8,10));
    if (PersonYear<0 || PersonDay <0|| PersonMonth<0){
        System.out.println("Invalid Date");
        System.out.print("Enter your date of birth in YYYY:MM:DD : ");
        DOB1=DOB.next();
    }
    // LocalDate date = LocalDate.of(year, month, day);
    // System.out.println(date);
    LocalDate date = LocalDate.now();
    String date1= date.toString();
    int TodayYear= Integer.parseInt(date1.substring(0,4));
    int TodayMonth=Integer.parseInt(date1.substring(5, 7));
    int Today=Integer.parseInt(date1.substring(8, 10));
    if (PersonYear>TodayYear || PersonMonth>12 || PersonDay>31){
        System.out.println("Invalid Date");
        System.out.print("Enter your date of birth in YYYY:MM:DD : ");
        DOB1=DOB.next();
        if(PersonDay>31){
            PersonDay=PersonDay-30;
            PersonMonth=PersonMonth+1;
        }
        if(PersonMonth>12){
            PersonMonth=PersonMonth-12;
            PersonYear=PersonYear+1;
        }
    }
    int AgeYear=TodayYear-PersonYear;
    int AgeMonth=TodayMonth-PersonMonth;    
    int AgeDay=Today-PersonDay;
    if (AgeDay<0){
        AgeDay=30-(-(AgeDay));
        AgeMonth=AgeMonth-1;
    }
    if (AgeMonth<0){
        AgeMonth=12-(-(AgeMonth));
        AgeYear=AgeYear-1;
    }

    DOB.close();
    System.out.println("Here is Your Age: "+AgeYear+" Years "+AgeMonth+" Months "+AgeDay+" Days");
}
}