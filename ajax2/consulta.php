<?php

include ('funciones_06.php');



$consulta=" SELECT * FROM `Bomba` ";

if($resultset=getSQLResultSet($consulta))
{
	while ($row = $resultset->fetch_array(MYSQLI_NUM))
	{
		  //muestra los datos consultados json
	    echo json_encode($row);


      /*
      echo "<p>Nombres - Departamento - Sueldo</p> \n";
      $nom = $row[1];
			echo $nom; echo " - ";
			$dep = $row[2];
			echo $dep; echo " - ";
			$suel = $row[3];
			echo $suel;
      */


			//echo "<p>".$row['nombres']." - ".$row['departamento']." - ".$row['sueldo']."</p> \n";


	}
}




?>
