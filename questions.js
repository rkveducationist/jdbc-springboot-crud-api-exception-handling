const questions = [

/* =========================
MCQ - JDBC BASICS
========================= */

{
type:"mcq",
question:"What is JDBC?",
options:["Java Database Connectivity","Java Data Control","Java Debug Code","None"],
answer:"Java Database Connectivity",
hint:"Connect Java to DB"
},

{
type:"mcq",
question:"Which package is used for JDBC?",
options:["java.sql","java.io","java.util","java.net"],
answer:"java.sql",
hint:"Core JDBC package"
},

{
type:"mcq",
question:"Which class is used to get connection?",
options:["DriverManager","Connection","Statement","ResultSet"],
answer:"DriverManager",
hint:"getConnection()"
},

{
type:"mcq",
question:"Which method establishes connection?",
options:["getConnection()","connect()","open()","start()"],
answer:"getConnection()",
hint:"DriverManager"
},

{
type:"mcq",
question:"Which interface executes SQL query?",
options:["Statement","Connection","DriverManager","ResultSet"],
answer:"Statement",
hint:"executeQuery()"
},

{
type:"mcq",
question:"Which object stores query result?",
options:["ResultSet","Statement","Connection","Driver"],
answer:"ResultSet",
hint:"Table data"
},

{
type:"mcq",
question:"DAO stands for?",
options:["Data Access Object","Data Application Object","Database Access Order","None"],
answer:"Data Access Object",
hint:"DB logic layer"
},

{
type:"mcq",
question:"Model class represents?",
options:["Table structure","Database","Connection","Query"],
answer:"Table structure",
hint:"Entity class"
},

/* =========================
MCQ - SPRING BOOT BASICS
========================= */

{
type:"mcq",
question:"What is Spring Boot?",
options:[
"Framework for Java applications",
"Database",
"Compiler",
"IDE"
],
answer:"Framework for Java applications",
hint:"Build apps easily"
},

{
type:"mcq",
question:"Which annotation starts Spring Boot app?",
options:["@SpringBootApplication","@Controller","@Service","@Autowired"],
answer:"@SpringBootApplication",
hint:"Main class"
},

{
type:"mcq",
question:"Spring Boot uses which server by default?",
options:["Tomcat","Jetty","GlassFish","JBoss"],
answer:"Tomcat",
hint:"Embedded server"
},

{
type:"mcq",
question:"Which file contains configurations?",
options:["application.properties","pom.xml","config.java","settings.xml"],
answer:"application.properties",
hint:"App settings"
},

/* =========================
MCQ - IOC & DI
========================= */

{
type:"mcq",
question:"What is IoC?",
options:[
"Inversion of Control",
"Injection of Code",
"Input of Control",
"None"
],
answer:"Inversion of Control",
hint:"Control to container"
},

{
type:"mcq",
question:"What is Dependency Injection?",
options:[
"Injecting objects",
"Creating objects manually",
"Deleting objects",
"None"
],
answer:"Injecting objects",
hint:"Auto wiring"
},

{
type:"mcq",
question:"Which annotation is used for DI?",
options:["@Autowired","@Override","@Bean","@Entity"],
answer:"@Autowired",
hint:"Inject dependency"
},

{
type:"mcq",
question:"Which annotation marks service layer?",
options:["@Service","@Controller","@Repository","@Component"],
answer:"@Service",
hint:"Business logic"
},

{
type:"mcq",
question:"Which annotation marks DAO layer?",
options:["@Repository","@Service","@Controller","@Component"],
answer:"@Repository",
hint:"DB layer"
},

{
type:"mcq",
question:"Which annotation handles HTTP requests?",
options:["@RestController","@Service","@Repository","@Component"],
answer:"@RestController",
hint:"API layer"
},

/* =========================
MCQ - CRUD APIs
========================= */

{
type:"mcq",
question:"Which HTTP method is used to create data?",
options:["POST","GET","PUT","DELETE"],
answer:"POST",
hint:"Create"
},

{
type:"mcq",
question:"Which HTTP method retrieves data?",
options:["GET","POST","PUT","DELETE"],
answer:"GET",
hint:"Read"
},

{
type:"mcq",
question:"Which HTTP method updates data?",
options:["PUT","POST","GET","DELETE"],
answer:"PUT",
hint:"Update"
},

{
type:"mcq",
question:"Which HTTP method deletes data?",
options:["DELETE","PUT","GET","POST"],
answer:"DELETE",
hint:"Remove"
},

/* =========================
MCQ - EXCEPTION HANDLING
========================= */

{
type:"mcq",
question:"Which annotation handles exceptions globally?",
options:[
"@ControllerAdvice",
"@ExceptionHandler",
"@Service",
"@RestController"
],
answer:"@ControllerAdvice",
hint:"Global handler"
},

{
type:"mcq",
question:"Which annotation handles specific exception?",
options:[
"@ExceptionHandler",
"@ControllerAdvice",
"@Autowired",
"@Bean"
],
answer:"@ExceptionHandler",
hint:"Specific error"
},

/* =========================
CODING - JDBC
========================= */

{
type:"code",
question:"Create JDBC connection",

required:["connection","drivermanager"],

hint:"Use getConnection",

solution:`import java.sql.*;

class Demo{
  public static void main(String[] args) throws Exception{
    Connection con = DriverManager.getConnection(
      "jdbc:mysql://localhost:3306/test",
      "root",
      "password"
    );

    System.out.println("Connected");
  }
}`
},

{
type:"code",
question:"Execute SELECT query",

required:["statement","executequery"],

hint:"Fetch data",

solution:`import java.sql.*;

class Demo{
  public static void main(String[] args) throws Exception{
    Connection con = DriverManager.getConnection(
      "jdbc:mysql://localhost:3306/test",
      "root",
      "password"
    );

    Statement st = con.createStatement();
    ResultSet rs = st.executeQuery("SELECT * FROM student");

    while(rs.next()){
      System.out.println(rs.getString("name"));
    }
  }
}`
},

/* =========================
CODING - SPRING BOOT
========================= */

{
type:"code",
question:"Spring Boot main class",

required:["springbootapplication"],

hint:"Entry point",

solution:`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}`
},

{
type:"code",
question:"Create REST Controller",

required:["restcontroller"],

hint:"API layer",

solution:`import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {

  @GetMapping("/hello")
  public String hello(){
    return "Hello World";
  }
}`
},

{
type:"code",
question:"POST API example",

required:["postmapping"],

hint:"Create data",

solution:`@PostMapping("/add")
public String add(){
  return "Data Added";
}`
},

{
type:"code",
question:"PUT API example",

required:["putmapping"],

hint:"Update data",

solution:`@PutMapping("/update")
public String update(){
  return "Updated";
}`
},

{
type:"code",
question:"DELETE API example",

required:["deletemapping"],

hint:"Delete data",

solution:`@DeleteMapping("/delete")
public String delete(){
  return "Deleted";
}`
},

{
type:"code",
question:"application.properties DB config",

required:["url","username"],

hint:"DB config",

solution:`spring.datasource.url=jdbc:mysql://localhost:3306/test
spring.datasource.username=root
spring.datasource.password=1234`
},

{
type:"code",
question:"Exception Handler example",

required:["exceptionhandler"],

hint:"Handle error",

solution:`import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalException {

  @ExceptionHandler(Exception.class)
  public String handle(){
    return "Error occurred";
  }
}`
}

];