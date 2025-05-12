<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class CookieConsentBanner extends Module
{
    public function __construct()
    {
        $this->name = 'cookieconsentbanner';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'TwojaNazwa';
        $this->need_instance = 0;

        $this->ps_versions_compliancy = ['min' => '8.0.0', 'max' => _PS_VERSION_];
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('Cookie Consent Banner');
        $this->description = $this->l('Displays a cookie consent banner and manages cookie behavior.');
    }

    public function install()
    {
        return parent::install() &&
               $this->registerHook('displayHeader');
    }

    public function uninstall()
    {
        return parent::uninstall();
    }

    public function hookDisplayHeader($params)
    {
        $this->context->controller->registerJavascript(
            'module-cookieconsentbanner-js',
            'modules/'.$this->name.'/cookieconsentbanner.js',
            ['position' => 'bottom', 'priority' => 150]
        );

        $this->context->controller->registerStylesheet(
            'module-cookieconsentbanner-css',
            'modules/'.$this->name.'/cookieconsentbanner.css'
        );

        return $this->display(__FILE__, 'views/templates/hook/displayHeader.tpl');
    }
}
