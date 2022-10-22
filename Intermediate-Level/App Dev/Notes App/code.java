// Program for Basic Notes App using Java by Parth Todankar

import java.util.*;
public class Notes
{
    public static void main(String args[])
    {
       Scanner sc=new Scanner(System.in);
       System.out.println("Enter your Note 1 :");  // Input for 1st Note
       String str1 = sc.nextLine();
       System.out.println("Enter your Note 2 :");  //Input for 2nd Note
       String str2 = sc.nextLine();
       System.out.println("    ~View you Notes~");  // Input to choose a note to view
       System.out.println(" Enter your Note Number :"); 
       int n=sc.nextInt();
       if(n==1)
       {
           System.out.println("Your note is : "+str1);  // Output for 1st Note
       }
       else if(n==2)
       {
           System.out.println("Your note is : "+str2);  // Output for 2nd Note
       }
       else
       {
           System.out.println("Invalid Option");  // Default
       }
    }
}
