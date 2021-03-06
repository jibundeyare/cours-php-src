<?php

// les champs `select` avec l'attribut `multiple="multiple"` peuvent renvoyer une ou plusieurs valeurs sous la forme d'un tableau

$validation = true;

// valeurs du champ `select` avec des balises `optgroup`
$aliments = array(
    'fruits' => array(
        'fraise',
        'kiwi',
        'orange'
    ),
    'légumes' => array(
        'carotte',
        'courgette',
        'pomme de terre'
    )
);

$formulaire = array(
    'aliments' => array()
);

$messages = array(
    'aliments' => '',
    'formulaire' => ''
);

if ($_POST) {
    if (isset($_POST['aliments']) && !empty($_POST['aliments'])) {
        $formulaire['aliments'] = $_POST['aliments'];
    } else {
        $validation = false;
        $messages['aliments'] = "merci de préciser les aliments";
    }

    if ($validation) {
        $messages['formulaire'] = "merci d'avoir rempli le formulaire";
    } else {
        $messages['formulaire'] = "merci de remplir le formulaire et de le valider";
    }
}

?><!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title></title>

</head>
<body>

<div><?php echo htmlentities($messages['formulaire']) ?></div>

<form action="" method="post">
    <div><?php echo htmlentities($messages['aliments']) ?></div>
    <label for="aliments">aliments</label>
    <?php // @warning il faut ajouter des crochets `[]` à l'attribut `name` pour que le champ puisse renvoyer plusieurs valeurs ?>
    <select multiple="multiple" name="aliments[]">
    <?php // génération du champ avec une boucle ?>
    <?php foreach ($aliments as $optgroup => $items): ?>
    <optgroup label="<?php echo htmlentities($optgroup); ?>">
        <?php // génération du champ avec une boucle ?>
        <?php foreach ($items as $item): ?>
            <?php // comparaison des données envoyées par l'utilisateur ?>
            <?php if (in_array($item, $formulaire['aliments'])): ?>
            <?php // l'utilisateur a coché cette case ?>
            <option selected="selected" value="<?php echo htmlentities($item); ?>"><?php echo htmlentities($item); ?></option>
            <?php else: ?>
            <?php // l'utilisateur n'a pas coché cette case ?>
            <option value="<?php echo htmlentities($item); ?>"><?php echo htmlentities($item); ?></option>
            <?php endif; ?>
        <?php endforeach; ?>
    </optgroup>
    <?php endforeach; ?>
    </select>

    <input type="submit" value="envoyer" />
</form>

</body>
</html>
