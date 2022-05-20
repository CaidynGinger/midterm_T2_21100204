<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    include 'db_connection.php'; 

    header("Access-Control-Allow-Origin: * ");
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents('php://PetDetails)');
    $data = json_decode($request_body);

    // echo $data;

    $nameOfPet = $data->nameOfPet;
    $speciesOfPet = $data->speciesOfPet;
    $genderOfPet = $data->genderOfPet;
    $Age = $data->Age;
    $ExportDestination = $data->ExportDestination;
    $exportOrigin = $data->exportOrigin;
    $microChipID = $data->microChipID;
    $ownerIDNumber = $data->ownerIDNumber;
    $ownerName = $data->ownerName;

    $sql = "INSERT INTO `pet_details`(
        `id`, 
        `pet_name`, 
        `pet_species`, 
        `pet_gender`, 
        `pet_age`, 
        `pet_chip_id`, 
        `pet_owner_name`, 
        `pet_owner_id`, 
        `export_origin`, 
        `export_destination`
    ) VALUES (
        NULL,
        $nameOfPet,
        $speciesOfPet,
        $genderOfPet,
        $Age,
        $microChipID,
        $ownerName,
        $ownerIDNumber,
        $exportOrigin,
        $ExportDestination,

    );";

    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo("Error Description: " . mysqli_error($conn));
    } else{
        echo("A-OKAY!");
    }

    ?>

