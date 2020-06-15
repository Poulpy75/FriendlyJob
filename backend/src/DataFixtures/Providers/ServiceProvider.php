<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;

/**
 * This provider is used to call consistent data concerning the Services
 */
class ServiceProvider extends BaseProvider
{
    // We set a protected property and store the data inside
    protected static $services = [
        'parent_id' => [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        'title' => [
            'Jardinage',
            'Bricolage',
            'Déménagement',
            'Garde d\'animaux',
            'Informatique',
            'Babysitting',
            'Soutien scolaire',
            'Aide à la personne',
        ],
        'description' => [
            "Vous avez besoin d'une taille de haie ou de faire pousser des pommes ? Choisissez le JobWorker qu'il vous faut !",
            "Si pour vous, monter un meuble IKEA est aussi obscur que le curling, ce service est fait pour vous !",
            "Parce que porter une machine à laver est bien plus simple à plusieurs, n'hésitez plus !",
            "Vous partez en vacances et vos proches sont allergique aux animaux ? Nos spécialistes en garde d'animaux sont là pour vous !",
            "Votre ordinateur ne s'allume plus ? L'écran bleu de la mort vous guette ? Les patins de votre souris ne glissent plus ? Nos JobWorkers se feront un plaisir de vous dépanner !",
            "Si, comme les animaux, vos proches sont allergique aux enfants, foncez !",
            "Vous avez besoin de prendre l'air, de partir en vacances, ou juste de prendre vos distances avec conjoint(e), ce service est fait pour vous !",
            "Vous éprouvez des difficultés pour telle ou telle matière ? Nos JobWorkers spécialisés peuvent vous offrir un accompagnement personnalisé qui vous aidera à progresser !",
            "Livraison de repas, visite à domicile, démarches administratives, veillez sur l'un de vos proches ?
            Pas de problème ! Nos JobWorkers qualifiés se feront un plaisir de vous aider !",
        ],
        'image' => [
            'https://i.ibb.co/1bPYLmz/jardinage.jpg',
            'https://i.ibb.co/jhR4T65/Bricolage.jpg',
            'https://i.ibb.co/jG7c7KJ/demenagement.jpg',
            'https://i.ibb.co/rMB52Bb/gardeanimaux.jpg',
            'https://i.ibb.co/3YtgX26/informatique.jpg',
            'https://i.ibb.co/6RkgSB6/babysitting.png',
            'https://i.ibb.co/2nJLWFT/student-team-meeting-at-table.jpg',
            'https://i.ibb.co/XL7Bn9h/aide.jpg',
        ],
    ];

    /**
     * This method will be called to transmit the data from the property for the fixtures
     */
    public static function getDataServices(){
        return static::$services;
    }
}