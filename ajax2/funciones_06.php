<?php 
header( 'Content-Type: text/html;charset=utf-8' );


function ejecutarSQLCommand($commando)
{
 
    $servidor="localhost";
    $Bd="Bd_SmartLiquid_06";
    $usuario="Omar9";
    $contraseña="123";
 
    $mysqli = new mysqli($servidor, $usuario, $contraseña, $Bd);

  /* check connection */
  if ($mysqli->connect_errno) {
    printf("ERROR Al CONECTAR: %s\n", $mysqli->connect_error);
    exit();
  }

  if ( $mysqli->multi_query($commando)) 
  {
    if ($resultset = $mysqli->store_result())
    {
    	while ($row = $resultset->fetch_array(MYSQLI_BOTH)) {
    		
    	}
    	$resultset->free();
    }
    
   
  }



$mysqli->close();
}



function getSQLResultSet($commando)
{
    
    $servidor="localhost";
    $Bd="Bd_SmartLiquid_06";
    $usuario="Omar9";
    $contraseña="123";
 
    $conexion = new mysqli($servidor, $usuario, $contraseña, $Bd);
    
    /* check connection */
    if ($conexion->connect_errno) 
    {
    printf("Error al conectar: %s\n", $conexion->connect_error);
    exit();
    }

    if ( $conexion->multi_query($commando))
    {
    return $conexion->store_result();
    }



    $conexion->close();
}


?>
