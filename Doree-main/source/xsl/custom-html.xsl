<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:import href="/home/codespace/.ptx/2.43.2/core/xsl/pretext-html.xsl"/>

  <!--
    Inline exercises are rendered as local numbered items within a section,
    e.g. "1. Practice", "2. Understand", instead of "Checkpoint 2.1.20 ...".
  -->
  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="serial-number">
    <xsl:number level="any"
      count="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]"
      from="section|chapter|appendix|article"
      format="1"/>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="number">
    <xsl:apply-templates select="." mode="serial-number"/>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="type-name"/>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-birth">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise-serial">
      <xsl:with-param name="heading-level" select="$heading-level"/>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-solutions">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise">
      <xsl:with-param name="heading-level" select="$heading-level"/>
      <xsl:with-param name="b-make-link" select="true()"/>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-xref-knowl">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise-serial">
      <xsl:with-param name="heading-level" select="$heading-level"/>
    </xsl:apply-templates>
  </xsl:template>
</xsl:stylesheet>
