<?php 
    class Database {
        private $host = "localhost";
        private $database_name = "mysourcing";
        private $username = "root";
        private $password = "Gp1235//Pri";
        private $strConnection = "";
        public $conn;
        public function getConnection(){
            $this->conn = null;
            try{
                $this->strConnection = "mysql:host=" . $this->host . ";dbname=" . $this->database_name . ";port=3306";
                echo $this->strConnection;
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name . ";port=3306", $this->username, $this->password);
    
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return $this->conn;
        }
    }  
    
?>
