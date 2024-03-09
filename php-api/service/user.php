<?php
    class User{
        private $conn;
        private $db_table = "User";
        public $id;
        public $name;
        public $firstName;
        public $lastName;
        public $email;
        public $phoneNumber;
        public $zipcode;
        public $state;
        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        public function getUsers(){
            $sqlQuery = "SELECT id, name, first_name, last_name, email, phone_number, zipcode, state FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        public function createUser(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        name = :name,
                        first_name = :firstName,
                        last_name = :lastName,   
                        email = :email, 
                        phone_number = :phoneNumber, 
                        zipcode = :zipcode, 
                        state = :state";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->firstName=htmlspecialchars(strip_tags($this->firstName));
            $this->lastName=htmlspecialchars(strip_tags($this->lastName));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->phoneNumber=htmlspecialchars(strip_tags($this->phoneNumber));
            $this->zipcode=htmlspecialchars(strip_tags($this->zipcode));
            $this->state=htmlspecialchars(strip_tags($this->state));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":firstName", $this->firstName);
            $stmt->bindParam(":lastName", $this->lastName);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":phoneNumber", $this->phoneNumber);
            $stmt->bindParam(":zipcode", $this->zipcode);
            $stmt->bindParam(":state", $this->state);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
    }
?>